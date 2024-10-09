use anchor_lang::prelude::*;

declare_id!("F5hkawr6BCpqcY4PKurBsCyaM3bijUWYtfd5LwX5vSnt");

#[program]
pub mod gridwise_program {
    use super::*;

    pub fn register_grid(
        ctx: Context<RegisterGrid>, 
        grid_id: u64,
        grid_name: String,
        location: String,
        latitude: f64,
        longitude: f64,
        total_power_capacity: u64
    ) -> Result<()> {
        let grid = &mut ctx.accounts.grid;
        grid.grid_id = grid_id;
        grid.grid_name = grid_name;
        grid.location = location;
        grid.latitude = latitude;
        grid.longitude = longitude;
        grid.total_power_capacity = total_power_capacity;

        let clock = Clock::get().unwrap();
        grid.timestamp = clock.unix_timestamp;

        Ok(())
    }

    pub fn register_charging_station(
        ctx: Context<RegisterStation>, 
        station_id: u64, 
        station_name: String, 
        latitude: f64, 
        longitude: f64, 
        power_rating: u64
    ) -> Result<()> {
        let station = &mut ctx.accounts.charging_station;
        station.station_id = station_id;
        station.station_name = station_name;
        station.latitude = latitude;
        station.longitude = longitude;
        station.power_rating = power_rating;

        let clock = Clock::get().unwrap();
        station.timestamp = clock.unix_timestamp;

        Ok(())
    }

    pub fn register_power_generation_point(
        ctx: Context<RegisterGeneration>, 
        plant_id: u64, 
        plant_name: String, 
        plant_type: String, 
        latitude: f64, 
        longitude: f64, 
        power_production: u64
    ) -> Result<()> {
        let plant = &mut ctx.accounts.power_generation_point;
        plant.plant_id = plant_id;
        plant.plant_name = plant_name;
        plant.plant_type = plant_type;
        plant.latitude = latitude;
        plant.longitude = longitude;
        plant.power_production = power_production;

        let clock = Clock::get().unwrap();
        plant.timestamp = clock.unix_timestamp;

        Ok(())
    }

    pub fn add_transaction(
        ctx: Context<AddTransaction>, 
        tx_id: u64, 
        power_type: String, 
        grid_address: Pubkey, 
        power_amount: u64
    ) -> Result<()> {
        let transaction = &mut ctx.accounts.transaction;
        transaction.tx_id = tx_id;
        transaction.power_type = power_type;
        transaction.grid_address = grid_address;
        transaction.power_amount = power_amount;

        let clock = Clock::get().unwrap();
        transaction.timestamp = clock.unix_timestamp;

        Ok(())
    }
}

#[derive(Accounts)]
pub struct RegisterGrid<'info> {
    #[account(
        init,
        payer = user,
        space = 8 + 64 + 64 + 64 + 8 + 8 + 8
    )]
    pub grid: Account<'info, Grid>,
    #[account(mut)]
    pub user: Signer<'info>,
    pub system_program: Program<'info, System>,
}

#[derive(Accounts)]
pub struct RegisterStation<'info> {
    #[account(init, payer = user, space = 8 + 64 + 64 + 8 + 8 + 8)]
    pub charging_station: Account<'info, ChargingStation>,
    #[account(mut)]
    pub user: Signer<'info>,
    pub system_program: Program<'info, System>,
}

#[derive(Accounts)]
pub struct RegisterGeneration<'info> {
    #[account(init, payer = user, space = 8 + 64 + 64 + 64 + 8 + 8 + 8)]
    pub power_generation_point: Account<'info, PowerGenerationPoint>,
    #[account(mut)]
    pub user: Signer<'info>,
    pub system_program: Program<'info, System>,
}

#[derive(Accounts)]
pub struct AddTransaction<'info> {
    #[account(init, payer = user, space = 8 + 64 + 64 + 64 + 64)]
    pub transaction: Account<'info, Transaction>,
    #[account(mut)]
    pub user: Signer<'info>,
    pub system_program: Program<'info, System>,
}

#[account]
pub struct Grid {
    pub grid_id: u64,
    pub grid_name: String,
    pub location: String,
    pub latitude: f64,
    pub longitude: f64,
    pub total_power_capacity: u64,
    pub timestamp: i64,  // Unix timestamp
}

#[account]
pub struct ChargingStation {
    pub station_id: u64,
    pub station_name: String,
    pub latitude: f64,
    pub longitude: f64,
    pub power_rating: u64,
    pub timestamp: i64,  // Unix timestamp
}

#[account]
pub struct PowerGenerationPoint {
    pub plant_id: u64,
    pub plant_name: String,
    pub plant_type: String,
    pub latitude: f64,
    pub longitude: f64,
    pub power_production: u64,
    pub timestamp: i64,  // Unix timestamp
}

#[account]
pub struct Transaction {
    pub tx_id: u64,
    pub power_type: String,
    pub grid_address: Pubkey,
    pub power_amount: u64,
    pub timestamp: i64,  // Unix timestamp
}
