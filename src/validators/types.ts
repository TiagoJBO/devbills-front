/* eslint-disable prettier/prettier */
import { z } from "zod";

import { createCategorySchema, createTransactionSchema, finacialEvolutionFilterSchema, transactionsFilterSchema } from "./schemas";

export type CreateCategoryData = z.infer<typeof createCategorySchema>;
export type CreateTransactionData = z.infer<typeof createTransactionSchema>;
export type transactionfilterDate =z.infer<typeof transactionsFilterSchema>;
export type FinancialEvolutionFilterData =z.infer<typeof finacialEvolutionFilterSchema>;
