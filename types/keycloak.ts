import Keycloak from 'keycloak-js'
import { toRefs, Ref, ToRefs,  } from 'vue'


export interface KeycloakComposable {
  isAuthenticated?: Ref<boolean>
  token?: Ref<string>
  user?: Ref<KeycloakTokenParsed>
  keycloak?: Keycloak | undefined
}

export interface KeycloakState {
  isAuthenticated: boolean
  token: string
  user: KeycloakTokenParsed,
}

export interface KeycloakTokenParsed {
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

