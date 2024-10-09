import { Connection, PublicKey, Keypair, SystemProgram } from "@solana/web3.js";
import { Program, AnchorProvider } from "@project-serum/anchor";
import BN from "bn.js";
import idl from "./abi.json";
import * as anchor from "@coral-xyz/anchor";
import {
  AddTransaction,
  RegisterChargingStation,
  RegisterGrid,
  RegisterPowerGenerationPoint,
} from "../app/types/types";
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
  txId: number,
  powerType: string,
  gridAddress: string,
  powerAmount: number
): Promise<AddTransaction> => {
  const program = await createConnection();
  const transaction = Keypair.generate();
  const provider = getProvider();

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
    return {
      txId: txId.toString(),
      powerType,
      gridAddress,
      powerAmount,
    };
  } catch (error) {
    console.error("Error adding transaction:", error);
    throw error; // Optionally rethrow the error for higher-level handling
  }
};

// Function to register a charging station
export const registerChargingStation = async (
  stationId: number,
  stationName: string,
  latitude: number,
  longitude: number,
  powerRating: number
): Promise<RegisterChargingStation> => {
  const program = await createConnection();
  const chargingStation = Keypair.generate();
  const provider = getProvider();

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
    return {
      stationId,
      stationName,
      latitude,
      longitude,
      powerRating,
    };
  } catch (error) {
    console.error("Error registering charging station:", error);
    throw error;
  }
};

export const registerGrid = async (
  gridId: number,
  gridName: string,
  location: string,
  latitude: number,
  longitude: number,
  totalPowerCapacity: number
): Promise<RegisterGrid> => {
  const program = await createConnection();
  const gridKeyPair = anchor.web3.Keypair.generate();
  const provider = getProvider();

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
        grid: gridKeyPair.publicKey,
        user: provider.wallet.publicKey,
      })
      .signers([gridKeyPair])
      .rpc();

    console.log("Grid registered successfully");
    return {
      gridId,
      gridName,
      location,
      latitude,
      longitude,
      totalPowerCapacity,
    };
  } catch (error) {
    console.error("Error registering grid:", error);
    throw error;
  }
};

export const registerPowerGenerationPoint = async (
  plantId: number,
  plantName: string,
  plantType: string,
  latitude: number,
  longitude: number,
  powerProduction: number
): Promise<RegisterPowerGenerationPoint> => {
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
    return {
      plantId,
      plantName,
      plantType,
      latitude,
      longitude,
      powerProduction,
    };
  } catch (error) {
    console.error("Error registering power generation point:", error);
    throw error;
  }
};
