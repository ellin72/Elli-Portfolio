# GitHub Configuration Guide

This document describes the GitHub configuration and automations set up for the Elli Portfolio project.

## GitHub Actions (CI/CD)

### Workflows

#### 1. **CI/CD Pipeline** (`.github/workflows/ci-cd.yml`)

Automated pipeline that runs on every push and pull request:

**Jobs:**
- **Lint & Type Check** - TypeScript type checking
- **Build & Test** - Project compilation
- **Security Scan** - Vulnerability scanning
- **Deploy (Preview)** - Deploy to preview on `develop` branch
- **Deploy (Production)** - Deploy to production on `main` branch

**Configuration:**
```yaml
Triggers:
  - Push to main, develop
  - Pull requests to main, develop

Requirements:
  - Node.js 18+
  - npm cache enabled
  - Successful lint and build
```

**Secrets Required:**
```
VERCEL_TOKEN          - Vercel API token
VERCEL_ORG_ID         - Vercel organization ID
VERCEL_PROJECT_ID     - Vercel project ID
SNYK_TOKEN            - Snyk security token (optional)
```

### Setting Up Secrets

1. Go to: **Settings → Secrets and variables → Actions**
2. Click **New repository secret**
3. Add each secret from your deployment provider

## Branch Protection Rules

Recommended settings for `main` branch:

1. Go to: **Settings → Branches**
2. Click **Add rule**
3. Configure:
   ```
   Branch pattern name: main
   
   Protection rules:
   ✅ Require pull request reviews before merging
   ✅ Require status checks to pass before merging
   ✅ Require branches to be up to date before merging
   ✅ Require code review from code owners
   ✅ Dismiss stale pull request approvals
   ✅ Require status checks to pass
   ✅ Require branches to be up to date before merging
   ✅ Include administrators in restrictions
   ```

## Code Owners

Create `.github/CODEOWNERS` file to automatically request review:

```
# Repository structure
*                       @ellin72

# Specific files
.github/workflows/**    @ellin72
src/                    @ellin72
README.md              @ellin72
```

## Funding Configuration

The `.github/FUNDING.yml` file enables:

1. **GitHub Sponsors** - Direct sponsor button
2. **Custom Links** - Buy Me a Coffee, Patreon, etc.
3. **Ko-fi** - Donation platform
4. **Liberapay** - Crowdfunding
5. **IssueHunt** - Issue-based funding

**Display:** Shows in "Sponsor" button on GitHub

## Issue Templates

Standardized templates for:
- Bug Reports
- Feature Requests
- Documentation Improvements

**Location:** `.github/ISSUE_TEMPLATE/`

## Pull Request Template

Standardized PR format in `.github/pull_request_template.md`

**Includes:**
- Description
- Related issues
- Type of change
- Testing information
- Checklist

## Repository Settings

### General

```
✅ Issues                    - Enabled
✅ Discussions               - Enabled
✅ Projects                  - Enabled
✅ Wiki                      - Disabled
✅ Sponsorships              - Enabled
✅ Preserve this repository - Enabled
```

### Access

```
Base role:        No permission
Teams:            Add teams as needed
Outside collaborators: Add as needed
```

### Code Security and Analysis

```
✅ Dependabot alerts        - Enabled
✅ Dependabot security updates - Enabled
✅ Secret scanning          - Enabled
✅ Push protection          - Enabled
```

### Pages

```
Source:    GitHub Actions
Branch:    (Auto-deployed)
Custom domain: (Optional)
Enforce HTTPS: ✅ Enabled
```

## Labels

Create these labels for organization:

| Label | Color | Description |
|-------|-------|-------------|
| bug | #d73a49 | Something isn't working |
| enhancement | #a2eeef | New feature or request |
| documentation | #0075ca | Improvements or additions to documentation |
| good first issue | #7057ff | Good for newcomers |
| help wanted | #008672 | Extra attention is needed |
| question | #d876e3 | Further information is requested |
| wontfix | #ffffff | This will not be worked on |
| blocked | #e0e0e0 | Blocked by another issue |

## Milestones

Create milestones for releases:

```
v2.1.0 (Planned)
v2.0.0 (Current)
v1.x (Legacy)
```

## Deployment Configuration

### Vercel Integration

1. **Connect Repository:**
   - Go to Vercel dashboard
   - Click "New Project"
   - Select this repository
   - Configure build settings

2. **Environment Variables:**
   ```
   VITE_EMAILJS_SERVICE_ID=service_xxx
   VITE_EMAILJS_TEMPLATE_ID=template_xxx
   VITE_EMAILJS_PUBLIC_KEY=xxx
   ```

3. **Automatic Deployments:**
   - Preview: Every push to non-main branch
   - Production: Every merge to main branch

### GitHub Pages

Enable if deploying to GitHub Pages:

1. Go to: **Settings → Pages**
2. Select: **GitHub Actions** as source
3. Create workflow file (auto-generates)

## Continuous Integration Checks

Automated checks run on every PR:

```
✅ TypeScript Type Check
✅ Build Verification
✅ Dependency Audit
✅ Security Scan
```

## Monitoring and Maintenance

### Check Status

- **Workflows:** Actions tab shows all runs
- **Checks:** PR shows detailed check results
- **Deployments:** Deployments tab shows history

### Troubleshooting

If workflow fails:
1. Check the failing job details
2. Review error logs
3. Fix the issue locally
4. Push fix to feature branch
5. Create new PR

## Best Practices

1. **Branch Strategy:**
   - `main` - Production-ready code
   - `develop` - Development integration
   - `feature/*` - Individual features

2. **Commit Messages:**
   - Descriptive and concise
   - Start with type: `feat:`, `fix:`, `docs:`, etc.
   - Reference issues: `Closes #123`

3. **Pull Requests:**
   - Small, focused changes
   - Complete the template
   - Wait for CI to pass
   - Request review from codeowners

4. **Code Review:**
   - Review for quality, not just approval
   - Provide constructive feedback
   - Approve when satisfied
   - Deploy once approved

## Useful Links

- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [Vercel Deployment](https://vercel.com/docs)
- [GitHub Security](https://docs.github.com/en/code-security)
- [Branch Protection Rules](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-protected-branches/about-protected-branches)

---

**Last Updated:** January 29, 2026  
**Version:** 1.0
