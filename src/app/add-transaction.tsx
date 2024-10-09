import {
  Connection,
  PublicKey,
  Keypair,
  Transaction,
  SystemProgram,
} from "@solana/web3.js";
import { Program, AnchorProvider, web3 } from "@project-serum/anchor";
import BN from "bn.js"; // Import BN class
import idl from "./abi.json";

// Replace with your program ID
const PROGRAM_ID = new PublicKey(
  "7rvBtZRY8RwhsrBfEmsbdXuF8jDK4QimGUyJRtXbaULM"
);

// Function to create a connection to the Solana network
const getConnection = () => {
  console.log("getConnection");
  return new Connection("https://api.devnet.solana.com", "confirmed");
};

// Function to create an AnchorProvider
const getProvider = () => {
  const connection = getConnection();
  console.log("connection", connection);
  const wallet = window.solana; // Assumes you're using Phantom wallet
  console.log("wallet", wallet.isConnected);
  if (!wallet || !wallet.isConnected) {
    throw new Error("Wallet not connected");
  }
  return new AnchorProvider(connection, wallet, {
    preflightCommitment: "confirmed",
  });
};

const createConnection = async () => {
  const connection = new Connection("https://api.devnet.solana.com"); // Adjust if needed
  const provider = new AnchorProvider(
    connection,
    window.solana, // Make sure this is properly set up
    AnchorProvider.defaultOptions()
  );

  const program = new Program(
    JSON.parse(JSON.stringify(idl)),
    PROGRAM_ID,
    provider
  );
  return program;
};
export const addTransaction = async (
  txId,
  powerType,
  gridAddress,
  powerAmount
) => {
  const program = await createConnection();
  const transaction = Keypair.generate();
  const provider = getProvider(); // Initialize provider here

  try {
    await program.methods
      .addTransaction(
        new BN(txId),
        powerType,
        new PublicKey(gridAddress),
        new BN(powerAmount)
      )
      .accounts({
        transaction: transaction.publicKey,
        user: provider.wallet.publicKey,
        systemProgram: SystemProgram.programId,
      })
      .signers([transaction])
      .rpc();

    console.log("Transaction added successfully");
  } catch (error) {
    console.error("Error adding transaction:", error);
  }
};

// Function to register a charging station
export const registerChargingStation = async (
  stationId,
  stationName,
  latitude,
  longitude,
  powerRating
) => {
  console.log("registerChargingStationsdfdfs");
  const program = await createConnection();
  console.log("program", program);
  const chargingStation = Keypair.generate();
  console.log(chargingStation);
  const provider = getProvider(); // Initialize provider here

  try {
    await program.methods
      .registerChargingStation(
        new BN(stationId),
        stationName,
        latitude,
        longitude,
        new BN(powerRating)
      )
      .accounts({
        chargingStation: chargingStation.publicKey,
        user: provider.wallet.publicKey,
        systemProgram: SystemProgram.programId,
      })
      .signers([chargingStation])
      .rpc();

    console.log("Charging station registered successfully");
  } catch (error) {
    console.error("Error registering charging station:", error);
  }
};

// Function to register a grid
export const registerGrid = async (
  gridId,
  gridName,
  location,
  latitude,
  longitude,
  totalPowerCapacity
) => {
  console.log(
    "registerChargingStation",
    gridId,
    gridName,
    latitude,
    longitude,
    totalPowerCapacity
  );
  const program = await createConnection();
  console.log("program", program.methods.registerGrid);
  console.log("program", program.methods);
  const grid = Keypair.generate();
  const provider = getProvider(); // Initialize provider here
  console.log("provider", provider);
  try {
    await program.methods
      .registerGrid(
        new BN(gridId),
        gridName,
        location,
        latitude,
        longitude,
        new BN(totalPowerCapacity)
      )
      .accounts({
        grid: grid.publicKey,
        user: provider.wallet.publicKey,
        systemProgram: SystemProgram.programId,
      })
      .signers([grid])
      .rpc();

    console.log("Grid registered successfully");
  } catch (error) {
    console.error("Error registering grid:", error);
  }
};

// Function to register a power generation point
export const registerPowerGenerationPoint = async (
  plantId,
  plantName,
  plantType,
  latitude,
  longitude,
  powerProduction
) => {
  const program = await createConnection();
  const powerGenerationPoint = Keypair.generate();
  const provider = getProvider();

  try {
    await program.methods
      .registerPowerGenerationPoint(
        new BN(plantId),
        plantName,
        plantType,
        latitude,
        longitude,
        new BN(powerProduction)
      )
      .accounts({
        powerGenerationPoint: powerGenerationPoint.publicKey,
        user: provider.wallet.publicKey,
        systemProgram: SystemProgram.programId,
      })
      .signers([powerGenerationPoint])
      .rpc();

    console.log("Power generation point registered successfully");
  } catch (error) {
    console.error("Error registering power generation point:", error);
  }
};
