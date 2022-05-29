import { clusterApiUrl, PublicKey } from "@solana/web3.js";
import tiksol from './tiksol.json'

export const SOLANA_HOST = clusterApiUrl('devnet')


export const TIKSOL_PROGRAM_ID = new PublicKey("3d5BHgVR7RWXkCHxbzRLNZvHR15iU7w8dBsXHoE8fMgE")

export const TIKSOL_IDL = tiksol