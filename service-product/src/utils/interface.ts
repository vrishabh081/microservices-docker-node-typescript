export interface ProductInterface {
    user_id: string | undefined,
    product_title: string | undefined,
    product_description: string | undefined,
    is_deleted: boolean | undefined
}

export interface ResponseMessageInterface {
    [key: string]: string
}

export interface JwtPayloadInterface {
    id: string;
    iat: number;
    exp: number;
}

export interface UserCacheInterface {
    user_id: string | undefined,
    full_name: string | undefined,
    user_name: string | undefined,
    email: string | undefined
}