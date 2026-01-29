# 🔒 Setup & Configuration Guide

Complete guide for setting up GitHub Actions, security, and compliance for the Elli Portfolio project.

## 📋 Table of Contents

1. [GitHub Secrets Setup](#github-secrets-setup)
2. [GitHub Actions Configuration](#github-actions-configuration)
3. [Branch Protection Rules](#branch-protection-rules)
4. [Funding Configuration](#funding-configuration)
5. [Security Setup](#security-setup)
6. [Legal & Compliance](#legal--compliance)

---

## GitHub Secrets Setup

### Prerequisites
- GitHub repository access
- Vercel account (for deployment)
- Snyk account (optional, for security scanning)

### Step 1: Create Vercel Secrets

1. **Get Vercel Tokens:**
   - Go to [Vercel Dashboard](https://vercel.com/dashboard)
   - Settings → Tokens
   - Create new token (copy it)

2. **Get Vercel IDs:**
   - Click on your team/project
   - Copy: Vercel Organization ID and Project ID

3. **Add to GitHub:**
   - Go to repository Settings
   - Secrets and variables → Actions
   - Create 3 new secrets:
     ```
     VERCEL_TOKEN=<your-vercel-token>
     VERCEL_ORG_ID=<your-org-id>
     VERCEL_PROJECT_ID=<your-project-id>
     ```

### Step 2: Create Snyk Secret (Optional)

1. **Get Snyk Token:**
   - Go to [Snyk Settings](https://app.snyk.io/account/settings)
   - Copy your API token

2. **Add to GitHub:**
   ```
   SNYK_TOKEN=<your-snyk-token>
   ```

### Step 3: Create Email Notifications Secret

1. **For Email Alerts:**
   ```
   EMAIL_NOTIFICATIONS=your-email@example.com
   ```

---

## GitHub Actions Configuration

### What's Automated

The CI/CD pipeline (`.github/workflows/ci-cd.yml`) handles:

1. **Lint & Type Check** - On every PR
2. **Build Verification** - On every PR
3. **Security Scan** - On every PR
4. **Preview Deploy** - On push to `develop`
5. **Production Deploy** - On push to `main`

### Manual Trigger (Optional)

To manually trigger workflows:

1. Go to **Actions** tab
2. Select workflow
3. Click **Run workflow**
4. Choose branch
5. Click **Run**

### Monitoring Workflows

1. Go to **Actions** tab
2. Click on workflow run
3. See job details and logs
4. Click job to see full output

### Troubleshooting Failures

If a workflow fails:

1. **Check the logs:**
   - Go to Actions
   - Click failed workflow
   - Review error messages

2. **Common issues:**
   - Missing secrets → Add to repository
   - Build failures → Run locally with `npm run build`
   - Type errors → Run locally with `npm run lint`

3. **Fix and retry:**
   - Fix the issue
   - Commit and push
   - Workflow runs automatically

---

## Branch Protection Rules

### Enable for `main` Branch

1. Go to **Settings → Branches**
2. Add branch protection rule:
   ```
   Branch name pattern: main
   ```

3. **Enable these rules:**
   - ✅ Require pull request reviews before merging
   - ✅ Require status checks to pass
   - ✅ Require branches to be up to date
   - ✅ Require code review from code owners
   - ✅ Dismiss stale PR approvals
   - ✅ Require commit to be signed
   - ✅ Include administrators

### For `develop` Branch

Create similar rules but less strict:
- ✅ Require 1 review
- ✅ Require status checks
- ✅ ❌ Don't require latest commit

---

## Funding Configuration

### GitHub Sponsors

1. **Set up GitHub Sponsors:**
   - Settings → Sponsorships
   - Enable GitHub Sponsors
   - Set up payment information

2. **Update FUNDING.yml:**
   - Already configured in `.github/FUNDING.yml`
   - GitHub button appears automatically

### Other Platforms

Add your handles to `.github/FUNDING.yml`:

```yaml
patreon: your-username
ko_fi: your-username
custom:
  - displayName: "Buy Me Coffee"
    url: https://buymeacoffee.com/your-username
```

---

## Security Setup

### Enable Code Security Features

1. Go to **Settings → Code security and analysis**

2. **Enable:**
   - ✅ Dependabot alerts
   - ✅ Dependabot security updates
   - ✅ Secret scanning
   - ✅ Push protection

### Configure Dependabot

Create `.github/dependabot.yml`:

```yaml
version: 2
updates:
  - package-ecosystem: "npm"
    directory: "/"
    schedule:
      interval: "weekly"
    open-pull-requests-limit: 5
```

### Set Up Code Owners

Create `.github/CODEOWNERS`:

```
*                    @ellin72
.github/workflows/**  @ellin72
src/                  @ellin72
```

---

## Legal & Compliance

### Files Created

✅ `LICENSE` - MIT License  
✅ `SECURITY.md` - Security policy  
✅ `PRIVACY_POLICY.md` - Privacy policy  
✅ `TERMS_OF_SERVICE.md` - Terms  
✅ `CODE_OF_CONDUCT.md` - Community guidelines  
✅ `CONTRIBUTING.md` - Contribution guidelines  

### What to Update

Edit contact emails in:
- `SECURITY.md` - Change `security@example.com`
- `PRIVACY_POLICY.md` - Change `privacy@example.com`
- `TERMS_OF_SERVICE.md` - Change `legal@example.com`
- `CODE_OF_CONDUCT.md` - Change `conduct@example.com`
- `CONTRIBUTING.md` - Change `contribute@example.com`

### Display in Repository

These files appear automatically:
- **LICENSE** - In repository header
- **SECURITY.md** - In Security policy section
- **CODE_OF_CONDUCT.md** - In Community standards
- **CONTRIBUTING.md** - In Issues/PRs
- **FUNDING.yml** - Sponsor button

---

## 🚀 Post-Setup Checklist

### GitHub Configuration
- [ ] Repository secrets added
- [ ] Branch protection rules enabled
- [ ] Code owners configured
- [ ] Dependabot enabled
- [ ] Funding configured

### Security
- [ ] Security policy in place
- [ ] Vulnerability reporting process
- [ ] Code security enabled
- [ ] Secret scanning active
- [ ] Push protection enabled

### Legal
- [ ] LICENSE updated with your info
- [ ] PRIVACY_POLICY.md updated with emails
- [ ] TERMS_OF_SERVICE.md reviewed
- [ ] CODE_OF_CONDUCT.md reviewed
- [ ] CONTRIBUTING.md reviewed
- [ ] All files committed to repository

### Documentation
- [ ] README updated with badges
- [ ] Contributing guidelines available
- [ ] Issue templates working
- [ ] PR template visible
- [ ] Documentation complete

---

## 📝 GitHub Repository README Addition

Add this section to your README.md:

```markdown
## Contributing

Contributions are welcome! Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct and the process for submitting pull requests.

## Security

If you find a security vulnerability, please email security@example.com instead of using the issue tracker.

See [SECURITY.md](SECURITY.md) for more details.

## License

This project is licensed under the MIT License - see [LICENSE](LICENSE) file for details.

## Support

- [Sponsor on GitHub](https://github.com/sponsors/ellin72)
- [Report a Bug](https://github.com/ellin72/Elli-Portfolio/issues/new?template=bug_report.md)
- [Request a Feature](https://github.com/ellin72/Elli-Portfolio/issues/new?template=feature_request.md)
- [Code of Conduct](CODE_OF_CONDUCT.md)
```

---

## 🔗 Useful Links

### GitHub
- [GitHub Actions Docs](https://docs.github.com/en/actions)
- [GitHub Secrets](https://docs.github.com/en/actions/security-guides/encrypted-secrets)
- [Branch Protection](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-protected-branches)

### Platforms
- [Vercel Deployment](https://vercel.com/docs)
- [Snyk Security](https://snyk.io/)
- [GitHub Sponsors](https://github.com/sponsors)

### Legal
- [MIT License Info](https://opensource.org/licenses/MIT)
- [GDPR Information](https://gdpr.eu/)
- [Contributor Covenant](https://www.contributor-covenant.org/)

---

## 🆘 Troubleshooting

### Workflow Not Running
- Check repository secrets are set
- Verify branch is `main` or `develop`
- Check GitHub Actions is enabled (Settings → Actions)

### Deploy Failed
- Check Vercel secrets are correct
- Verify Vercel project exists
- Check build logs in Actions

### Status Check Failing
- Run `npm run lint` locally
- Run `npm run build` locally
- Fix errors and push again

### Secrets Not Working
- Verify secret names match exactly
- Check secrets are set at repository level (not organization)
- Verify workflow references correct secret name

---

## ✅ Complete Setup

When all steps are done:

1. ✅ GitHub Actions runs on every PR
2. ✅ Security scanning active
3. ✅ Automatic deployment working
4. ✅ Security policies in place
5. ✅ Legal documents ready
6. ✅ Community guidelines set
7. ✅ Contributing process defined
8. ✅ Funding configured

Your repository is now **enterprise-ready** with:
- ✅ Automated CI/CD
- ✅ Security scanning
- ✅ Legal compliance
- ✅ Community governance
- ✅ Professional standards

---

**Last Updated:** January 29, 2026  
**Status:** Complete ✅
