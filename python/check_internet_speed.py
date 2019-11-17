import subprocess
import json

print('Performing check...')

output = subprocess.check_output(['speedtest-cli', '--json'])

results = json.loads(output)

print(results['client'])
