import { GridwiseProgram } from "@/app/types/gridwise_program";
import { Idl } from "@coral-xyz/anchor";
import { Program } from "@project-serum/anchor";
import { atom } from "jotai";


export const programAtom = atom<Program | null>(null);