export interface LocationRequests {
	optionValue: string;
	optionLabel: string;
}

export interface Identity {
	connection: string;
	user_id: string;
	provider: string;
	isSocial: boolean;
}

export interface Permission {
	usagedetail: string[];
	marketingsignups: string[];
}

export interface Group {
	tSAGO_ED: string;
	tSAGO_ISO: string;
}

export interface Portal {
	permissions: Permission;
	groups: Group;
}

export interface App_metadata {
	charts: string;
	createdBy: string;
	createdOn: string;
	resetpass: string;
	quickviewFeedback: string;
	quickviewPIN: string;
	portal: Portal;
	request:string[];
}

export interface User {
	created_at: string;
	email: string;
	email_verified: boolean;
	family_name: string;
	given_name: string;
	identities: Identity[];
	name: string;
	nickname: string;
	picture: string;
	updated_at: string;
	user_id: string;
	username: string;
	blocked: boolean;
	app_metadata: App_metadata;
}

export interface RootObject {
	status: string;
	requests: Request[];
	user: User;
	user_id: string;
	error: any[];
}
/* export interface Group {
	[index:string]: string;

}

export interface Permission {
	quickview: string[];
	tracking: string[];
}

export interface Portal {
	groups: Group;
	permissions: Permission;
}

export interface Authorization {
	groups: string[];
	roles: any[];
	permissions: any[];
}

export interface User {
	stormpath_href: string;
	portal: Portal;
	createdAt: string;
	modifiedAt: string;
	charts: string;
	playerId: string;
	playerIds: any[];
	quickviewFeedback: string;
	quickviewPIN: string;
	resetpass: string;
	updatedBy: string;
	updatedOn: string;
	usergroup: string;
	authorization: Authorization;
	createdBy: string;
	createdOn: string;
	user_charts: string;
	modifiedOn: string;
	modifiedBy: string;
	status: string;
	refreshToken: string;
	refreshTokenExpiresAt: number;
	request: string[];
}
 */