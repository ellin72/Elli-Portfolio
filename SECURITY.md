# Security Policy

## Reporting a Vulnerability

If you discover a security vulnerability in this project, please email **security@example.com** instead of using the issue tracker.

**Do not publicly disclose the vulnerability before it has been addressed.**

### What to Include

When reporting a security vulnerability, please include:

1. **Description** - Clear description of the vulnerability
2. **Location** - Affected component, file, or feature
3. **Reproduction Steps** - Steps to reproduce the issue
4. **Severity** - Your assessment of the severity (Critical, High, Medium, Low)
5. **Potential Impact** - What could happen if exploited
6. **Suggested Fix** - If you have one

### Response Timeline

- **Initial Response:** Within 24 hours
- **Assessment:** Within 48 hours
- **Update/Fix:** Within 7-14 days depending on severity
- **Public Disclosure:** After patch is released

## Security Best Practices

This project follows security best practices including:

### Dependencies
- ✅ Regular dependency updates
- ✅ Automated security scanning (Snyk)
- ✅ npm audit checks in CI/CD
- ✅ Vulnerability monitoring

### Code Security
- ✅ TypeScript for type safety
- ✅ Input validation
- ✅ Environment variable protection
- ✅ No hardcoded secrets
- ✅ HTTPS only for external requests

### Development
- ✅ Code review requirement for PRs
- ✅ Branch protection rules
- ✅ Signed commits encouraged
- ✅ Security scanning on all pushes

### Deployment
- ✅ Environment isolation
- ✅ Secure secret management
- ✅ No sensitive data in logs
- ✅ HTTPS enforcement

## Supported Versions

| Version | Status | End of Support |
|---------|--------|-----------------|
| 2.0+ | ✅ Supported | Current |
| 1.x | ⚠️ Limited Support | 2024-12-31 |
| < 1.0 | ❌ Unsupported | N/A |

## Security Headers

This project supports security headers:
- X-Content-Type-Options: nosniff
- X-Frame-Options: DENY
- X-XSS-Protection: 1; mode=block
- Referrer-Policy: strict-origin-when-cross-origin
- Content-Security-Policy: strict

## Dependencies

All dependencies are:
- ✅ Regularly updated
- ✅ Scanned for vulnerabilities
- ✅ Verified for authenticity
- ✅ Minimized for attack surface

### Key Dependencies
- React 18.2.0 - UI library
- TypeScript 5.2.2 - Type safety
- Tailwind CSS 3.3.5 - Styling
- Framer Motion 10.16.4 - Animations
- EmailJS - Email service

## Reporting Non-Security Issues

For non-security issues, please use the [GitHub Issues](https://github.com/ellin72/Elli-Portfolio/issues) tracker.

## Additional Resources

- [OWASP Top 10](https://owasp.org/Top10/)
- [Node.js Security Best Practices](https://nodejs.org/en/docs/guides/nodejs-security/)
- [React Security](https://react.dev/)

## Thank You

We appreciate responsible disclosure and your efforts to improve the security of this project.

---

**Last Updated:** January 29, 2026  
**Security Officer:** Elli N Shituna  
**Contact:** security@example.com
