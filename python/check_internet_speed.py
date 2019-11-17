import subprocess
import json
from requests import post

print('Performing check...')

output = subprocess.check_output(['speedtest-cli', '--json'])

results = json.loads(output)


print('Response received')
print('Sending to server...')

response = post('http://178.62.32.208/dump', results)

print('Server responded with:')
print(response.json())

print(results['client'])
