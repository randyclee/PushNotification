from crontab import CronTab

cron = CronTab()
job = cron.new(command='python push.py')
job.minute.every(0.1)
