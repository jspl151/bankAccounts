const accounts = [
  {
    'name': 'Arun',
    'accountNo': '001',
  },
  {
    'name': 'Babu',
    'accountNo': '002',
  },
  {
    'name': 'Chandra',
    'accountNo': '003',
  },
];

const balances = {
  // accountNo: balance
  '001': 5000,
  '002': 2000,
  '003': 0,
};

const transactions = [
  {
    'accountNo': '001',
    'type': 'withdrawal',
    'amount': 1000,
  },
  {
    'accountNo': '001',
    'type': 'deposit',
    'amount': 500,
  },
  {
    'accountNo': '001',
    'type': 'withdrawal',
    'amount': 1000,
  },
  {
    'accountNo': '002',
    'type': 'deposit',
    'amount': 300,
  },
  {
    'accountNo': '002',
    'type': 'withdrawal',
    'amount': 200,
  },
  {
    'accountNo': '003',
    'type': 'deposit',
    'amount': 200,
  },
];

const updateBalancesWithTransactions = (transaction) =>
  transactions.map((transaction) => {
    transaction.type == 'deposit' ?
      balances[transaction.accountNo] += transaction.amount :
      balances[transaction.accountNo] -= transaction.amount;
  });

const displayBalances = (accounts) => {
  const result = accounts.map((account) =>
  ({
    ...account, balance: balances[account.accountNo]
  }));

  console.table(result);
}
// Do not change below this line.
const main = () => {
  console.log('Balances before transactions');
  displayBalances(accounts);
  updateBalancesWithTransactions(transactions);
  console.log('Balances after transactions');
  displayBalances(accounts);
};
main();