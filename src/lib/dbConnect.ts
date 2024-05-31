import mongoose from "mongoose";

// type-safety
type ConnectionObject = {
  isConnected?: boolean;
};

const connection: ConnectionObject = {};

async function dbConnect(): Promise<void> {
  // Check if a connection already exists and is open
  if (connection.isConnected && mongoose.connection.readyState === 1) {
    console.log("Already connected to the database");
    return;
  }

  try {
    // Attempt to connect to the database
    const db = await mongoose.connect(process.env.MONGODB_URI || "", {});

    // Update connection state flag
    connection.isConnected = db.connections[0].readyState === 1;

    console.log("Database connected successfully");
  } catch (error) {
    console.error("Database connection failed:", error);

    // exit in case of a connection error
    process.exit(1);
  }
}

export default dbConnect;

// we can also perform the same thing by using number instead of boolean to check the db is already connected or not

// import mongoose from 'mongoose';

// type ConnectionObject = {
//   isConnected?: number;
// };

// const connection: ConnectionObject = {};

// async function dbConnect(): Promise<void> {
//   // Check if we have a connection to the database or if it's currently connecting
//   if (connection.isConnected) {
//     console.log('Already connected to the database');
//     return;
//   }

//   try {
//     // Attempt to connect to the database
//     const db = await mongoose.connect(process.env.MONGODB_URI || '', {});

//     connection.isConnected = db.connections[0].readyState;

//     console.log('Database connected successfully');
//   } catch (error) {
//     console.error('Database connection failed:', error);

//     // Graceful exit in case of a connection error
//     process.exit(1);
//   }
// }

// export default dbConnect;
