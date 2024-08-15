## Clusters

Is A Node Approach to Solve A Problem

let's Say, An ALPHA request Take 9 Seconds To complete, And in New Tab if I request the same ALPHA URL Sade by Side
then, that same ALPHA request in 2nd tab will not b entertained Until unless the Request In 1srt tab is not entertained

ie > 1st-tab >> Request Take 9 sec to Complete & then In 2nd-tab > > Request Take [9 sec of 1st Tab => Resource Become Free => + 9 sec of 2nd Tab] to Complete

Quite worst User Experience....
Is't it...?

So By Using `CLUSTER FORK` Function
ONE Of All Is Parent | cluster.isMaster
We Can Create Multiple Child_Node | Worker Processes [A Whole Server(Child_Node With its Unique ID => ${Process.pid})]
that Runs parallel With Other Child_Node Processes (USING ROUND ROBIN) & Runs on Same port

T0 Maximize Performance We Fetch Using Node Available Core in Machine
And Generate =>> Child_Node | Worker Processes === No. of Available Core

### PM2 Module Usage, need & Basic commands

It Should must be installed Globally > npm i pm2 -g

> pm2 provides Configured Cluster & Help to manage any worker process Individually

> [!IMPORTANT]
> Common Commands

1. pm2 start server.js >> To start Server
2. pm2 stop server.js >> To stop Server
3. pm2 delete server.js >> To delete Server
4. pm2 start server.js -i 2 || pm2 start server.js -i max >> To start With clusters & mention Number of Cluster You Want to consume, ie: 2 | 3 | max
5. pm2 show `${process ID | cluster ID}` >> To start With clusters & monitor Cluster You Want, ie: pm2 show 2
6. pm2 stop `${process ID | cluster ID}` >> To start With clusters & Stop Cluster You Want, ie: pm2 stop 4
7. pm2 start `${process ID | cluster ID}` >> To start With clusters & start Cluster You had stopped, ie: pm2 start 4
8. pm2 ls || pm2 status || pm2 list >> To Check Current Status
9. pm2 logs >> To view Logs
10. pm2 logs --lines 200 >> To view as many logs as you want
11. pm2 start server.js -l logs.txt -i max >> To Start server with logs in a file (root/logs.txt) && clusters required
12. pm2 monit >> To Monitor Status continuously
13. pm2 reload server.js >> (pm2 Does not support Instant|hot Reload Like nodemon) This Command is use in Production Specially When Hotfix is Done & instead of Restarting Server Which my take Long Time So We Use Reload command Which stop and Start Each Worker process One by one So the Users don't need to wait Until the whole Server is up and running...
> 14. Cluster can not share there memory state *`DISADVANTAGE`* To Overcome This We need to Use A Database To Hold Common Data among them....


## Threads

Unlike Cluster Threads have Shared memory among them
You Can Create as Many threads as you want, `all run On a separate thread Parallel`
