""" Delete database folder. """

# Utilities
import os
import shutil

# Is the user root?
if os.geteuid() != 0:
    raise Exception('You need to be root for this operation.')

# DB data
if os.path.exists('./api/storage/db'):
    shutil.rmtree('./api/storage/db')
    print('DB data deleted successfuly.')
