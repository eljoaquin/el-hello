const handler = require('serve-handler');
const http = require('http');

describe('Check real page', () => {
    let server;
    beforeEach(async () => {
      server = http.createServer((request, response) => {
        // You pass two more arguments for config and middleware
        // More details here: https://github.com/vercel/serve-handler#options
        return handler(request, response, {
          public: "dist"
        });
      })
      server.listen(3000, () => {
        console.log('Running at http://localhost:3000');
      });
      await page.goto('http://localhost:3000');
    });

    afterEach(() => {
      server.close();
    })

    it('should have proper title', async () => {
      await expect(page.title()).resolves.toMatch('El hello');
    });
  });
