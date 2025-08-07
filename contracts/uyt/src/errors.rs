use soroban_sdk::contracterror;

#[contracterror]
#[derive(Copy, Clone, Debug, Eq, PartialEq, PartialOrd, Ord)]
#[repr(u32)]
pub enum Error {
    /// Contract has already been initialized
    AlreadyInitialized = 1,
    /// Contract has not been initialized
    NotInitialized = 2,
    /// Invalid amount provided (zero or negative)
    InvalidAmount = 3,
    /// Insufficient balance for operation
    InsufficientBalance = 4,
    /// Unauthorized access
    Unauthorized = 5,
    /// Invalid recipient address
    InvalidRecipient = 6,
} 