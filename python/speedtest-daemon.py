from daemon import DaemonContext
from .speedtest import start

print('what')

with DaemonContext():
    start()
    print('hey')
