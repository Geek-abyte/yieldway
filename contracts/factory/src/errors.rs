use soroban_sdk::contracterror;

#[contracterror]
#[derive(Copy, Clone, Debug, Eq, PartialEq, PartialOrd, Ord)]
#[repr(u32)]
pub enum Error {
    /// Contract has already been initialized
    AlreadyInitialized = 1,
    /// Contract has not been initialized
    NotInitialized = 2,
    /// Unauthorized access
    Unauthorized = 3,
    /// Factory is paused
    FactoryPaused = 4,
    /// Deployment failed
    DeploymentFailed = 5,
} 