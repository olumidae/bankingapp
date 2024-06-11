'use server';

import { ID } from "node-appwrite";
import { createAdminClient, createSessionClient } from "../appwrite";
import { cookies } from "next/headers";
import { parseStringify } from "../utils";

export const signIn = async ({email, password}: signInProps) => {
    try {
        // Mutuation / Database/ Make fetch
        const { account } = await createAdminClient();
        const response = account.createEmailPasswordSession(email, password);
        console.log(response)
        return parseStringify(response);
    } catch (error) {
        console.log(error)
    }
}

export const signUp = async (values: SignUpParams) => {
    try {
        // Create User
        const { account } = await createAdminClient();
        const {email, password, firstName, lastName, city, address1, ssn, postalCode,dateOfBirth } = values;
        const newUserAccount = await account.create(ID.unique(), email, password,  `${firstName} ${lastName}`);
        const session = await account.createEmailPasswordSession(email, password);

        cookies().set("appwrite-session", session.secret, {
            path: "/",
            httpOnly: true,
            sameSite: "strict",
            secure: true,
        });

        return parseStringify(newUserAccount)
    } catch (error) {
        console.log(error)
    }
}


// ... your initilization functions

export async function getLoggedInUser() {
    try {
      const { account } = await createSessionClient();
      const newUser = await account.get();
      return parseStringify(newUser);
    } catch (error) {
      return null;
    }
  }
  