const API_BASE_URL: string = 'https://fakestoreapi.com';

export async function getAllProducts(): Promise<any[]> {
    const response = await fetch(`${API_BASE_URL}/products`);
    return response.json();
}

export async function getProductCategories(): Promise<string[]> {
    const response = await fetch(`${API_BASE_URL}/products/categories`);
    return response.json();
}

export async function getProductsByCategory(category: string): Promise<any[]> {
    const response = await fetch(`${API_BASE_URL}/products/category/${category}`);
    return response.json();
}
