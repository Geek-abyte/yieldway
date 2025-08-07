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
    /// Emergency pause is active
    EmergencyPause = 5,
    /// Unauthorized access
    Unauthorized = 6,
    /// Invalid asset provided
    InvalidAsset = 7,
    /// Slippage tolerance exceeded
    SlippageExceeded = 8,
    /// Rebalancing threshold not met
    RebalanceThresholdNotMet = 9,
    /// Protocol integration error
    ProtocolError = 10,
} 