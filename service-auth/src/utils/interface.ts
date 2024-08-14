export interface CompanyInterface {
    company_name: string | undefined,
    company_address: string | undefined,
    company_number: string | undefined,
    is_deleted: boolean | undefined,
}

export interface UserInterface {
    company_id: string | undefined,
    parent_id: string | undefined,
    role?: string,
    full_name: string | undefined,
    user_name: string | undefined,
    profile_image?: string,
    email: string | undefined,
    password: string | undefined,
    phone: string | undefined,
    address: string | undefined,
    age: number | undefined,
    is_deleted: boolean | undefined,
}

export interface RegisterInterface {
    company_info: CompanyInterface,
    user_info: UserInterface
}

export interface LoginInterface {
    email: string,
    password: string
}

export interface ResponseMessageInterface {
    [key: string]: string
}

export interface UserCacheInterface {
    user_id: string,
    full_name: string,
    user_name: string,
    email: string
}