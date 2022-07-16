---
title: Subscription Bot
date: '2022-07-19T12:00:00.00Z'
description: 'Youtube Subscription Bot built with Selenium'
---

## Motivation
The motivation of this software comes from an unpleasant experience: when I switch my google account, I need to resubscribe the youtube channels manually by opening each channel page and clicking the subscribe button. Provided that I have at least more than 200 channels subscribed in my old account, it would take me more than an hour to repeat this boring procedure. Hence, the idea of an automated bot to resubscribe the channels emerged.

![Subscribe](./subscribe.gif)

## How it works
The subscription bot is built with Python and Selenium, open source tools and libraries aimed at support browser automation. With that, we can ask the browser to automatically open webpages from the weblinks stored in a csv file. The csv file contained the  all of subscribed channel links and can be acquired from the Google takeout service. Then we can find and click the **Subscribe** button by locating its XPATH element on the webpages which is identical for all channel pages. Some challenges in the automated bot includes the bot detection from Google that prevents logging into google account. However, it could be prevented by setting several parameters that changes the request header of the HTTPS request. And the final result is that with minimal manual attention, the subscription bot could automatically subscribe my previously subscribed channels within 10 minutes. 

## Area for Improvement
Although the bot can subscribe youtube channels automatically, it does not include the google account log-in procedure which still requires manual input at the start of the program. Also, as with every new bot browser window, Google would pop up the cookie consent form to ask for the permission for the use of cookie. For now, it is still manually bypassed due to difficulty in locating the elements of the form. Finally, some previously subscribed channels may be closed and the csv file from the Google takeout would still contain that channel's entry, the program would stuck on that channel and exit eventually. One of the possible solution would be a data cleaning process to ensure every entry in the csv file is valid. Another solution would be a exception handling mechanism when it cannot find the subscribe button in the page and proceed to the next entry.

[GitHub](https://github.com/philippuk/Subscription-Bot)



