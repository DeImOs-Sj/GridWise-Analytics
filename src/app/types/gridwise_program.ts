/**
 * Program IDL in camelCase format in order to be used in JS/TS.
 *
 * Note that this is only a type helper and is not the actual IDL. The original
 * IDL can be found at `target/idl/gridwise_program.json`.
 */
export type GridwiseProgram = {
  "address": "F5hkawr6BCpqcY4PKurBsCyaM3bijUWYtfd5LwX5vSnt",
  "metadata": {
    "name": "gridwiseProgram",
    "version": "0.1.0",
    "spec": "0.1.0",
    "description": "Created with Anchor"
  },
  "instructions": [
    {
      "name": "addTransaction",
      "discriminator": [
        48,
        96,
        174,
        112,
        81,
        30,
        239,
        89
      ],
      "accounts": [
        {
          "name": "transaction",
          "writable": true,
          "signer": true
        },
        {
          "name": "user",
          "writable": true,
          "signer": true
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "txId",
          "type": "u64"
        },
        {
          "name": "powerType",
          "type": "string"
        },
        {
          "name": "gridAddress",
          "type": "pubkey"
        },
        {
          "name": "powerAmount",
          "type": "u64"
        }
      ]
    },
    {
      "name": "registerChargingStation",
      "discriminator": [
        92,
        227,
        163,
        235,
        56,
        37,
        198,
        156
      ],
      "accounts": [
        {
          "name": "chargingStation",
          "writable": true,
          "signer": true
        },
        {
          "name": "user",
          "writable": true,
          "signer": true
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "stationId",
          "type": "u64"
        },
        {
          "name": "stationName",
          "type": "string"
        },
        {
          "name": "latitude",
          "type": "f64"
        },
        {
          "name": "longitude",
          "type": "f64"
        },
        {
          "name": "powerRating",
          "type": "u64"
        }
      ]
    },
    {
      "name": "registerGrid",
      "discriminator": [
        208,
        238,
        253,
        24,
        227,
        235,
        62,
        178
      ],
      "accounts": [
        {
          "name": "grid",
          "writable": true,
          "signer": true
        },
        {
          "name": "user",
          "writable": true,
          "signer": true
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "gridId",
          "type": "u64"
        },
        {
          "name": "gridName",
          "type": "string"
        },
        {
          "name": "location",
          "type": "string"
        },
        {
          "name": "latitude",
          "type": "f64"
        },
        {
          "name": "longitude",
          "type": "f64"
        },
        {
          "name": "totalPowerCapacity",
          "type": "u64"
        }
      ]
    },
    {
      "name": "registerPowerGenerationPoint",
      "discriminator": [
        22,
        78,
        242,
        140,
        107,
        45,
        221,
        101
      ],
      "accounts": [
        {
          "name": "powerGenerationPoint",
          "writable": true,
          "signer": true
        },
        {
          "name": "user",
          "writable": true,
          "signer": true
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "plantId",
          "type": "u64"
        },
        {
          "name": "plantName",
          "type": "string"
        },
        {
          "name": "plantType",
          "type": "string"
        },
        {
          "name": "latitude",
          "type": "f64"
        },
        {
          "name": "longitude",
          "type": "f64"
        },
        {
          "name": "powerProduction",
          "type": "u64"
        }
      ]
    }
  ],
  "accounts": [
    {
      "name": "chargingStation",
      "discriminator": [
        238,
        245,
        220,
        162,
        111,
        34,
        37,
        194
      ]
    },
    {
      "name": "grid",
      "discriminator": [
        168,
        154,
        48,
        14,
        82,
        188,
        145,
        84
      ]
    },
    {
      "name": "powerGenerationPoint",
      "discriminator": [
        15,
        223,
        169,
        219,
        236,
        70,
        98,
        126
      ]
    },
    {
      "name": "transaction",
      "discriminator": [
        11,
        24,
        174,
        129,
        203,
        117,
        242,
        23
      ]
    }
  ],
  "types": [
    {
      "name": "chargingStation",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "stationId",
            "type": "u64"
          },
          {
            "name": "stationName",
            "type": "string"
          },
          {
            "name": "latitude",
            "type": "f64"
          },
          {
            "name": "longitude",
            "type": "f64"
          },
          {
            "name": "powerRating",
            "type": "u64"
          },
          {
            "name": "timestamp",
            "type": "i64"
          }
        ]
      }
    },
    {
      "name": "grid",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "gridId",
            "type": "u64"
          },
          {
            "name": "gridName",
            "type": "string"
          },
          {
            "name": "location",
            "type": "string"
          },
          {
            "name": "latitude",
            "type": "f64"
          },
          {
            "name": "longitude",
            "type": "f64"
          },
          {
            "name": "totalPowerCapacity",
            "type": "u64"
          },
          {
            "name": "timestamp",
            "type": "i64"
          }
        ]
      }
    },
    {
      "name": "powerGenerationPoint",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "plantId",
            "type": "u64"
          },
          {
            "name": "plantName",
            "type": "string"
          },
          {
            "name": "plantType",
            "type": "string"
          },
          {
            "name": "latitude",
            "type": "f64"
          },
          {
            "name": "longitude",
            "type": "f64"
          },
          {
            "name": "powerProduction",
            "type": "u64"
          },
          {
            "name": "timestamp",
            "type": "i64"
          }
        ]
      }
    },
    {
      "name": "transaction",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "txId",
            "type": "u64"
          },
          {
            "name": "powerType",
            "type": "string"
          },
          {
            "name": "gridAddress",
            "type": "pubkey"
          },
          {
            "name": "powerAmount",
            "type": "u64"
          },
          {
            "name": "timestamp",
            "type": "i64"
          }
        ]
      }
    }
  ]
};
