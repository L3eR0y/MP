export interface User {
	iss?: string;
	sub?: string;
	aud?: string;
	exp?: number;
	iat?: number;
	auth_time?: number;
	nonce?: string;
	acr?: string;
	amr?: string;
	azp?: string;
	session_state?: string;
	[key: string]: any; // Add other attributes here.
}

export default interface Auth {
	authenticated: boolean,
	token: string,
  user: User | undefined
}