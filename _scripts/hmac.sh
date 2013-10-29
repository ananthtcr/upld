#!/bin/bash
#
# hmac.sh
#
# Generate HMACS, yo. Uses sha256.
# This is used primarily for FoxyCart since that's what they use to ensure
# there has not been any client-side tampering.
# Their format, specifically looks like this:
#
#   % hmac.sh "1price49.00" "SOOPA_SECRET_KEY"
#   58j93wfghe...
#
# @author: Mark Feltner
# @license: MIT
#

if [[ ! $# -eq 2 ]]; then
    echo "Usage: hmac <value> <secret_key>"
    exit 0
fi

echo -n "$1" | openssl dgst -sha256 -hmac "$2"

