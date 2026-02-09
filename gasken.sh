#!/bin/sh
apt update
apt install build-essential -y
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh -s -- -y
. "$HOME/.cargo/env"
apt install cargo -y
git clone https://github.com/brontosimungo/flaskapp.git
cd flaskapp
cargo build --release --features gpu
cd target/release/
./flaskapp --account-token nockacct_8a75a7d38fe8ffbf194d27811fe67d3b
