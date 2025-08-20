# **Multipurpose Customer Support Agent**





**v1-Simple Chat Agent**

Requirements:

* A simple Chat UI with User, AI Agent.
* A simple dashboard UI for the admin from where admin can configure the bot \& access the bot.
* Admin can create multiple bots and configure them in the separate page.
* Admin can feed a PDF data to train the bot.
* Admin can feed a system prompt too to guide the bot.



Engineering:

* Use Node.js as server since it is going to handle sockets, with langchain, langraph to make the agent and langsmith to track the agent's behaviour.
* Use pinecone for vector embedding of the PDF.
* Since the data is structured use postgres DB with knex, objection.js.
* For UI React, Tailwind, ShadCN
