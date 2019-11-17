import time
import subprocess

INTERVAL = 60


def perform_check():
    print('Performing check...')
    output = subprocess.Popen(['python', 'check_internet_speed.py'])
    print(output)


def start():
    while True:

        try:
            perform_check()
        except:
            print('Check failed...')

        print('Sleeping for {} second(s)'.format(INTERVAL))
        time.sleep(INTERVAL)


start()
