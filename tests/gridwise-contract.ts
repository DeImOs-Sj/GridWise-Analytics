
import * as anchor from "@coral-xyz/anchor";
import { Program } from "@coral-xyz/anchor";
import { SolanaUei } from "../target/types/solana_uei";
import { assert } from "chai";

describe("solana-uei", () => {
  // Configure the client to use the local cluster.
  const provider = anchor.AnchorProvider.env();
  anchor.setProvider(provider);

  const program = anchor.workspace.UriProgram as Program<SolanaUei>;
  
  // grid account info
  const gridKeyPair = anchor.web3.Keypair.generate()
  const gridId = new anchor.BN(1);

  const chargingStationKeyPair = anchor.web3.Keypair.generate();
  const station_id = new anchor.BN(1);

  const generationPlantKeyPair = anchor.web3.Keypair.generate();
  const plant_id = new anchor.BN(1);

  const txKeyPair = anchor.web3.Keypair.generate();

  it("Register Grid", async () => {


    const gridName = "MACB";
    const location = "Maharashtra"
    const latitude = 40.7128;
    const longitude = -74.0060;
    const totalPowerCapacity = new anchor.BN(50000);

    await program.methods.registerGrid(gridId,gridName, location, latitude, longitude, totalPowerCapacity)
    .accounts({
      grid: gridKeyPair.publicKey,
      user: provider.wallet.publicKey,
    })
    .signers([gridKeyPair])
    .rpc();

    const gridAccount = await program.account.grid.fetch(gridKeyPair.publicKey);
    console.log(gridAccount)
    assert.equal(gridAccount.gridName, "MACB");

  });


  it("register charging station", async () => {

    const station_name = "Ather EV Station";
    const latitude = -74.0060
    const longitude = 40.7128;
    const power_rating = new anchor.BN(50000);

    await program.methods.registerChargingStation(
      station_id, station_name,latitude,longitude,power_rating
    ).accounts({
      chargingStation: chargingStationKeyPair.publicKey,
      user: provider.wallet.publicKey
    }).signers(
      [chargingStationKeyPair]
    ).rpc()

    const chargingStationAccount = await program.account.chargingStation.fetch(chargingStationKeyPair.publicKey);
    console.log(chargingStationAccount)
    assert.equal(chargingStationAccount.stationName, "Ather EV Station");

  })


  it("register power generation point", async () => {

    const plant_name = "Solar Energy Production";
    const plant_type = "Solar";
    const latitude = -74.0060
    const longitude = 40.7128;
    const power_production = new anchor.BN(60000);

    await program.methods.registerPowerGenerationPoint(
      plant_id, plant_name,plant_type,latitude,longitude,power_production
    ).accounts({
      powerGenerationPoint: generationPlantKeyPair.publicKey,
      user: provider.wallet.publicKey
    }).signers(
      [generationPlantKeyPair]
    ).rpc()

    const chargingStationAccount = await program.account.powerGenerationPoint.fetch(generationPlantKeyPair.publicKey);
    console.log(chargingStationAccount)
    assert.equal(chargingStationAccount.plantName, "Solar Energy Production");

  })

  it("add_transaction", async () => {

    const tx_id = new anchor.BN(1243978);
    const grid_address = gridKeyPair.publicKey;
    const power_type = "GENERATION";
    const power_amount = new anchor.BN(60000);

    await program.methods.addTransaction(
      tx_id,power_type,grid_address,power_amount
    ).accounts({
      transaction: txKeyPair.publicKey,
      user: provider.wallet.publicKey
    }).signers(
      [txKeyPair]
    ).rpc()

    const tx = await program.account.transaction.fetch(txKeyPair.publicKey);
    console.log(tx)
    assert.equal(tx.powerType, "GENERATION");

  })






});
