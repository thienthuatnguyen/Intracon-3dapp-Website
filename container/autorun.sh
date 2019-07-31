#!/usr/bin/env bash

# Read possible environment files in the root folder (docker configs attached to this container).
envFiles=$(ls /*.env)
if [ "${envFiles}" != "" ]; then
  for file in ${envFiles}
  do
    echo "Including environment values from ${file}"
    cat ${file}
    echo "********"
    source ${file}
  done
fi

/waitForDependencies.sh

# Interpret the environment variables expected in the .env files
# -
if [ "${environment}" != "" ]; then
  export PM2_MACHINE_NAME="${environment}"
  export PM2_PUBLIC_KEY=kqmxobtm9kdt442
  export PM2_SECRET_KEY=uu0q3y8kb42ucd2
fi

if [ "${environment}" == "qa" ]; then
  export PM2_MACHINE_NAME="qa_${HOSTNAME}"
  export PM2_PUBLIC_KEY=0
  export PM2_SECRET_KEY=0
fi

(cd /usr/src/ && yarn start) 2>&1
