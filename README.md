# HTTP Healthcheck

Makes requests to a given URL until it gives a response. This is useful for checking other services are up before starting end to end tests.

# Usage

The basic usage is as follows:

`healthcheck <urlToCheck>`

Although you can add values for maxRetries and intervals if you need to.
Max retries defaults to 20 and interval defaults to 1000ms

`healthcheck <urlToCheck> <maxRetries> <interval>`
