/// <reference types="@sveltejs/kit" />

// See https://kit.svelte.dev/docs/typescript
// for information about these interfaces
declare namespace App {
	interface Locals {
		userid: string;
	}

	interface Platform {
		something: string;
	}

	interface Session {
		something: string;
	}

	interface Stuff {
		something: string;
	}
}
