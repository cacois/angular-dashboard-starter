# This script starts both client and server as background processes logging to files, 
# uses multitail to tail both, and exits all when the script is killed.
# 
# By default, logs will display in two columns, with the server on the
# left, and the client on the right. You can change the maultitail command
# as needed to suit your workflow.

trap "exit" INT TERM ERR
trap "kill 0" EXIT

(cd server && yarn start > server.log &)
(cd client && yarn start:hmr > client.log &)

multitail -cT ansi server/server.log -cT ansi client/client.log

wait
