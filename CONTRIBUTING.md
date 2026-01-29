# Contributing to Elli Portfolio

Thank you for your interest in contributing! This document provides guidelines and instructions for contributing to the project.

## Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn
- Git
- Basic knowledge of React, TypeScript, and Tailwind CSS

### Setup Development Environment

1. **Fork the repository**
   ```bash
   # Click "Fork" on GitHub
   ```

2. **Clone your fork**
   ```bash
   git clone https://github.com/YOUR_USERNAME/Elli-Portfolio.git
   cd Elli-Portfolio
   ```

3. **Add upstream remote**
   ```bash
   git remote add upstream https://github.com/ellin72/Elli-Portfolio.git
   ```

4. **Install dependencies**
   ```bash
   npm install
   ```

5. **Create a feature branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

## Development Workflow

### Making Changes

1. **Make your changes** in a feature branch
2. **Follow code style** (see below)
3. **Test your changes** locally
4. **Commit with meaningful messages**

### Code Style

#### TypeScript
- Use strict mode
- Type all function parameters and returns
- Avoid `any` type
- Use interfaces over types when possible
- Example:
  ```typescript
  interface ButtonProps {
    variant: 'primary' | 'secondary';
    onClick: () => void;
  }
  
  export const Button: React.FC<ButtonProps> = ({ variant, onClick }) => {
    // Implementation
  };
  ```

#### React Components
- Use functional components with hooks
- Use descriptive component names
- Keep components focused and single-responsibility
- Example:
  ```typescript
  export const MyComponent = () => {
    const [state, setState] = React.useState(false);
    
    return (
      <div>
        {/* Component JSX */}
      </div>
    );
  };
  ```

#### Tailwind CSS
- Use utility classes effectively
- Avoid inline styles when possible
- Keep classNames organized
- Use consistent spacing (8px rhythm)
- Example:
  ```jsx
  <div className="flex items-center justify-between gap-4 px-6 py-3 rounded-lg bg-gray-100 dark:bg-gray-800">
    {/* Content */}
  </div>
  ```

#### Naming Conventions
- Components: PascalCase (`Button.tsx`, `HeroSection.tsx`)
- Variables/functions: camelCase (`isLoading`, `handleClick`)
- Constants: UPPER_SNAKE_CASE (`MAX_WIDTH`, `DEFAULT_TIMEOUT`)
- Files: Match component name or descriptive kebab-case

### Testing

```bash
# Run TypeScript check
npm run lint

# Build the project
npm run build

# Preview build locally
npm run preview
```

## Commit Guidelines

### Commit Message Format

```
type(scope): subject

body

footer
```

### Type
- `feat` - New feature
- `fix` - Bug fix
- `docs` - Documentation
- `style` - Code style changes
- `refactor` - Code refactoring
- `perf` - Performance improvement
- `test` - Adding tests
- `chore` - Maintenance tasks

### Examples
```
feat(hero): add profile photo integration

- Implement professional photo display
- Add animated gradient border
- Support responsive layout

Closes #123

---

fix(contact): resolve email validation error

- Fix regex pattern for email validation
- Add proper error messaging

---

docs: update setup instructions

- Clarify installation steps
- Add screenshots

---

refactor(skills): optimize component structure

- Reduce complexity
- Improve performance
```

## Pull Request Process

1. **Update from upstream**
   ```bash
   git fetch upstream
   git rebase upstream/main
   ```

2. **Push to your fork**
   ```bash
   git push origin feature/your-feature-name
   ```

3. **Create Pull Request**
   - Go to GitHub and click "New Pull Request"
   - Fill out PR template completely
   - Link related issues
   - Add descriptive title and description

4. **PR Description Template**
   ```markdown
   ## Description
   Brief description of changes
   
   ## Related Issue
   Fixes #issue_number
   
   ## Type of Change
   - [ ] Bug fix
   - [ ] New feature
   - [ ] Breaking change
   - [ ] Documentation
   
   ## Testing
   How to test the changes
   
   ## Checklist
   - [ ] Code follows style guide
   - [ ] TypeScript compiles
   - [ ] Self-reviewed changes
   - [ ] Comments added for complex logic
   - [ ] Documentation updated
   - [ ] No new warnings generated
   ```

5. **Respond to feedback**
   - Engage with reviewers
   - Request re-review after changes
   - Keep discussion respectful

## Areas for Contribution

### High Priority
- [ ] Add project images and case studies
- [ ] Enhance skills section with proficiency bars
- [ ] Add blog/articles section
- [ ] Improve mobile responsiveness
- [ ] Add more animations

### Medium Priority
- [ ] Documentation improvements
- [ ] Test coverage
- [ ] Performance optimizations
- [ ] Accessibility enhancements
- [ ] Dark mode refinements

### Welcome Contributions
- Bug fixes
- Documentation
- Code improvements
- Feature requests with implementation
- Tests
- Examples

### Don't Contribute
- Unrelated features
- Low-quality code
- Breaking changes without discussion
- Spam or self-promotion

## Branch Naming

```
feature/feature-name       # New feature
fix/bug-description        # Bug fix
docs/documentation-area    # Documentation
refactor/component-name    # Refactoring
perf/optimization-area     # Performance
chore/maintenance-task     # Maintenance
```

## Code Review Checklist

Reviewers will check:
- [ ] Code quality and style
- [ ] No breaking changes
- [ ] Tests (if applicable)
- [ ] Documentation updated
- [ ] Performance impact
- [ ] Accessibility
- [ ] Browser compatibility

## Questions?

- **Issues:** Use GitHub Issues for questions
- **Discussions:** Use GitHub Discussions
- **Email:** contribute@example.com

## Recognition

Contributors will be recognized in:
- README.md
- CONTRIBUTORS.md (to be created)
- Release notes
- GitHub contributors page

## Legal

By contributing, you agree that:
1. Your contributions are your own work
2. You have rights to contribute the work
3. Work is contributed under project license
4. You agree to Code of Conduct

## Additional Resources

- [GitHub Flow Guide](https://guides.github.com/introduction/flow/)
- [How to write a good commit message](https://chris.beams.io/posts/git-commit/)
- [React Best Practices](https://react.dev/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

---

Thank you for contributing! 🎉

**Last Updated:** January 29, 2026  
**Version:** 1.0
