// This one will be a little tricky. So check out this overview first: https://www.youtube.com/watch?v=sJ-c3BA-Ypo
class BankBranch {
  constructor(branchInfo) {
      if (!BankBranch.bankBranchInstance) {
          this.branchInfo = branchInfo;
          BankBranch.bankBranchInstance = this;
      }
      return BankBranch.bankBranchInstance;
  }

  static bankBranchInstance = null;

  static getInstance(branchInfo) {
      return new BankBranch(branchInfo);
  }

  static getBranchInfo() {
      if (BankBranch.bankBranchInstance) {
          return BankBranch.bankBranchInstance.branchInfo;
      } else {
          return "No branch information available";
      }
  }
}

// Usage section
const branchA = BankBranch.getInstance('Branch A Info');
const branchB = BankBranch.getInstance('Branch B Info');

console.log(branchA === branchB); // true, both referring to the same instance

console.log(BankBranch.getBranchInfo()); // Branch A Info
