import subprocess
import json
from requests import post

print('Performing check...')

# Get output from CLI
output = subprocess.check_output(['speedtest-cli', '--json'])

# Convert to object
results = json.loads(output)

print('Response received')
print('Sending to server...')

# Log to the server
post('http://157.245.41.239/', json=results)