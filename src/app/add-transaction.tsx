import {
  Connection,
  PublicKey,
  Keypair,
  Transaction,
  SystemProgram,
} from "@solana/web3.js";
import { Program, AnchorProvider, web3 } from "@project-serum/anchor";
import BN from "bn.js"; // Import BN class
import IDL from "./abi.json";

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

// // Function to get the program
// const getProgram = async () => {
//   const provider = getProvider();
//   console.log("provider", JSON.parse(JSON.stringify(IDL)));
//   const result = new Program(
//     JSON.parse(JSON.stringify(IDL)),
//     "7rvBtZRY8RwhsrBfEmsbdXuF8jDK4QimGUyJRtXbaULM",
//     provider
//   );
//   console.log("result", result);
//   return result;
// };

function validateIDL(idl) {
  console.log("Full IDL:", JSON.stringify(idl, null, 2));

  // Check for instructions
  if (!idl.instructions || !Array.isArray(idl.instructions)) {
    console.error("IDL is missing instructions array");
    return false;
  }

  // Validate each instruction
  idl.instructions.forEach((ix, index) => {
    console.log(`Instruction ${index}:`, ix);
    if (!ix.name || !ix.accounts || !Array.isArray(ix.accounts)) {
      console.error(`Instruction ${index} is malformed`);
    }
  });

  return true;
}

// const getProgram = async () => {
//   try {
//     const connection = new Connection("https://api.devnet.solana.com"); // Or your preferred RPC endpoint
//     const provider = new AnchorProvider(
//       connection,
//       window.solana, // Assumes you're using Solana wallet adapter
//       AnchorProvider.defaultOptions()
//     );

//     console.log("IDL:", IDL);

//     const program = new Program(
//       JSON.parse(JSON.stringify(IDL)),
//       PROGRAM_ID,
//       provider
//     );

//     console.log("Program instance created:", program);

//     return program;
//   } catch (error) {
//     console.error("Error in getProgram:", error);
//     throw error;
//   }
// };
const getProgram = async () => {
  try {
    const connection = new Connection("https://api.devnet.solana.com"); // Adjust if needed
    const provider = new AnchorProvider(
      connection,
      window.solana, // Make sure this is properly set up
      AnchorProvider.defaultOptions()
    );

    if (!validateIDL(IDL)) {
      throw new Error("IDL validation failed");
    }

    const program = new Program(
      JSON.parse(JSON.stringify(IDL)),
      PROGRAM_ID,
      provider
    );
    console.log("Program instance created successfully");
    return program;
  } catch (error) {
    console.error("Error in getProgram:", error);
    throw error;
  }
};
export const addTransaction = async (
  txId,
  powerType,
  gridAddress,
  powerAmount
) => {
  const program = await getProgram();
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
  const program = await getProgram();
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
  const program = await getProgram();
  const grid = Keypair.generate();
  const provider = getProvider(); // Initialize provider here

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
  const program = await getProgram();
  const powerGenerationPoint = Keypair.generate();
  const provider = getProvider(); // Initialize provider here

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
