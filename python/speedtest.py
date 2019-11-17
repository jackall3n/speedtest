import time
import subprocess

INTERVAL = 10


def perform_check():
    print('Performing check...')
    process = subprocess.Popen(['python', './check_internet_speed.py'])

    print('PID', process.pid)


def start():
    while True:

        try:
            perform_check()
        except Exception as e:
            print('Check failed...')
            print(e)

        print('Sleeping for {} second(s)'.format(INTERVAL))
        time.sleep(INTERVAL)


start()
