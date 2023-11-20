import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:3001";

/** API Class.
 *
 * Static class tying together methods used to get/send to to the API.
 * There shouldn't be any frontend-specific stuff here, and there shouldn't
 * be any API-aware stuff elsewhere in the frontend.
 *
 */

class PEELApi {
  // DON'T MODIFY THIS TOKEN
  static token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZ" +
    "SI6InRlc3R1c2VyIiwiaXNBZG1pbiI6ZmFsc2UsImlhdCI6MTU5ODE1OTI1OX0." +
    "FtrMwBQwe6Ue-glIFgz_Nf8XxRT2YecFCiSpYL0fCXc";

  static async request(endpoint, data = {}, method = "get") {
    console.debug("API Call:", endpoint, data, method);

    const url = `${BASE_URL}/${endpoint}`;
    const headers = { Authorization: `Bearer ${PEELApi.token}` };
    const params = (method === "get")
        ? data
        : {};

    try {
      return (await axios({ url, method, data, params, headers })).data;
    } catch (err) {
      console.error("API Error:", err.response);
      let message = err.response.data.error.message;
      throw Array.isArray(message) ? message : [message];
    }
  }

  // Individual API routes


   /** ----- PRODUCT API ROUTES ------ */

  /** Get details on a product by id. */
  static async getProduct(id) {
    let res = await this.request(`products/${id}`);
    return res.product;
  }

  /** Get details on all products
   *  with no query, get all products
   *  with query, filter by product name
   */
  static async getAllProducts(query) {
    let res = await this.request(`products/?nameLike=${query}`);
    return res.products;
  }

  /** Create a product */
  static async createProduct(productData){
    let res = await this.request(`products/`, productData, "POST");
    return res.product;
  }

  /** Delete a product */
  static async deleteProduct(id){
    let res = await this.request(`products/${id}`, {}, "DELETE");
    return res.product;
  }

  /** Update a product */
  static async updateProduct(productData){
    let updateData = {
      name: productData.name,
      description: productData.description,
      website: productData.website,
      image: productData.image
    }
    let res = await this.request(`products/${productData.id}`, updateData, "PATCH");
    return res.product;
  }

  /** ----- USER API ROUTES ------ */

  /** Get user details */
  static async getUser(username){
    let res = await this.request(`users/${username}`);
    return res.user;
  }

  /** Get JWT via user register */
  static async signupUser(userData){
    let res = await this.request(`auth/register`, userData, "POST");
    return res.token;
  }

  /** Get JWT via user login  */
  static async loginUser(userData){
    let res = await this.request(`auth/token`, userData, "POST");
    return res.token;
  }

  /** update user info  */
  static async updateUser(userData){
    let updateData = {
      firstName: userData.firstName,
      lastName: userData.lastName,
      email: userData.email,
      coverPic: userData.coverPic,
      profilePic: userData.profilePic
    }//TODO: Seperate these in form rather than api)
    let res = await this.request(`users/${userData.username}`, updateData, "PATCH");
    return res.user;
  }

}

export default PEELApi
