import COMPANIES from "../models/mock-company";
import Company from "../models/company";

export default class CompanyService {

    static companies:Company[] = COMPANIES;
  
    static getCompanies(): Promise<Company[]> {
      return new Promise<Company[]>(resolve => {
        resolve(this.companies);
      });
    }
  
    static getCompany(id: number): Promise<Company|null> {
      return new Promise(resolve => {    
        resolve(this.companies.find(company => id === company.id) || null);
      }); 
    }
  }

