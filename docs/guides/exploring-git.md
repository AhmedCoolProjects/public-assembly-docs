# Exploring Git on GitHub

## **Introduction**

Git enables multiple developers to work together on projects. Git is the seed that connects GitHub and your local computer across the web. This guide walks you through the Git Source Control features built into Visual Studio Code + GitHub.

## **Prerequisites**

In order to begin this guide, you must have completed the following:

- [Getting Started with GitHub](https://git-scm.com/downloads)
- [Vercel Setup](https://git-scm.com/downloads)
- [Visual Studio Code Setup](https://git-scm.com/downloads)

## **What You’ll Do**

- Install Git
- Create a Repository
- Create a Branch
- Make a Commit
- Clone a Repository

---

[Downloads](https://git-scm.com/downloads)

## **Installing Git**

### **Mac OS X**

Click here to download the latest (**2.37.3**) **64-bit** version [https://git-scm.com/download/mac](https://git-scm.com/download/mac)

![img](https://github.com/public-assembly/public-assembly-docs/blob/main/static/imgs/exploring-git-assets/Install%20git%20and%20homebrew/01.png)

Navigate to homebrew and install in your terminal if you don't already have the package manager on your operating system. Here you will copy the link...

```
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

![img](https://github.com/public-assembly/public-assembly-docs/blob/main/static/imgs/exploring-git-assets/Install%20git%20and%20homebrew/02.png)

Open terminal in your launchpad or hit the 'F4' key on your keyboard and type terminal.

![img](https://github.com/public-assembly/public-assembly-docs/blob/main/static/imgs/exploring-git-assets/Install%20git%20and%20homebrew/03.png)

Copy and paste the code into your terminal. You should be able to hit 'return' and run this code which will automatically download homebrew into your system. Must be on an administrator level user account.

![img](https://github.com/public-assembly/public-assembly-docs/blob/main/static/imgs/exploring-git-assets/Install%20git%20and%20homebrew/04.png)

After homebrew has finished installing type 'brew install git' into the terminal and hit 'return'

![img](https://github.com/public-assembly/public-assembly-docs/blob/main/static/imgs/exploring-git-assets/Install%20git%20and%20homebrew/05.png)

---

### **Windows**

Click here to download the latest (**2.37.3**) **64-bit** version [https://git-scm.com/download/win](https://git-scm.com/download/win)

- Install window will pop up swiftly after downloading.

![img](https://github.com/public-assembly/public-assembly-docs/blob/main/static/imgs/exploring-git-assets/Install%20git%20windows/Untitled.png)

- Make sure to follow the steps as your files update.

![img](https://github.com/public-assembly/public-assembly-docs/blob/main/static/imgs/exploring-git-assets/Install%20git%20windows/complete.png)

## **After Install**

Open your VSCode application

Navigate to the Terminal tab at the top and click “New Terminal”

Type `git -v` or `git —version` in your terminal to confirm if git has been installed

```bash
$ git -v
```

Type `git config --global [user.name](http://user.name/) “[firstname lastname]”` to set a name that is identifiable.

```bash
$ git config --global user.name "[Johnny Appleseed]"
```

Type git config --global user.email “[valid-email]”, preferably the email you used to set up your GitHub account this will be associated with each history marker.

```bash
$ git config --global user.email "[johnny.a@gmail.com]"
```

**Congrats, you are finished installing Git to your computer!**

---

## **Source Control on GitHub**

### **Create a Repository**

A **repository** is usually used to organize a single project. Repositories can contain folders and files, images, videos, spreadsheets, and data sets -- anything your project needs.

Let’s start by creating a simple  `hello-world` repository.

1. In the upper-right corner of any page, use the  drop-down menu, and select **New repository**.

   ![img](https://github.com/public-assembly/public-assembly-docs/blob/main/static/imgs/exploring-git-assets/Exploring%20git%20on%20github/01.png)

2. In the **Repository name** box, enter `hello-world`.
3. In the **Description** box, write a short description.

   ![img](https://github.com/public-assembly/public-assembly-docs/blob/main/static/imgs/exploring-git-assets/Exploring%20git%20on%20github/02.png)

4. Select **Add a README file**.

   1. _Often, repositories include a README file, a file with information about your project. README files are written in the plain text Markdown language. You can use this [cheat sheet](https://www.markdownguide.org/cheat-sheet/) to get started with Markdown syntax. GitHub lets you add a README file at the same time you create your new repository. GitHub also offers other common options such as a license file, but you do not have to select any of them now._

   ![img](https://github.com/public-assembly/public-assembly-docs/blob/main/static/imgs/exploring-git-assets/Exploring%20git%20on%20github/06.png)

5. Select whether your repository will be **Public** or **Private**.
6. Click **Create repository**.

   ![img](https://github.com/public-assembly/public-assembly-docs/blob/main/static/imgs/exploring-git-assets/Exploring%20git%20on%20github/Screen%20Shot%202022-10-02%20at%207.30.37%20AM.png)

## **Branching**

Branching lets you have different versions of a repository at one time.

![img](https://github.com/public-assembly/public-assembly-docs/blob/main/static/imgs/exploring-git-assets/Exploring%20git%20on%20github/68747470733a2f2f646f63732e6769746875622e636f6d2f6173736574732f63622d32333932332f696d616765732f68656c702f7265706f7369746f72792f6272616e6368696e672e706e67-1.png)

By default, your repository has one branch named `main` that is considered to be the definitive branch. You can create additional branches off of `main` in your repository. This is helpful when you want to add new features, experiment, and/or make edits to a project without changing the main source of code. The work done on different branches will not show up on the main branch until you merge it, which we will cover later in this guide.

When you create a branch off the `main` branch, you're making a copy, or snapshot, of `main` as it was at that point in time. If someone else made changes to the `main` branch while you were working on your branch, you could pull in those updates. Think about a car switching lanes.

### **Create a branch**

1. Click the **Code** tab of your `hello-world` repository.
2. Click the drop-down at the top of the file list that says **main**.

   ![img](https://github.com/public-assembly/public-assembly-docs/blob/main/static/imgs/exploring-git-assets/Exploring%20git%20on%20github/07.png)

3. Type a branch name, `readme-edits`, into the text box.
4. Click **Create branch: readme-edits from main**.

![img](https://github.com/public-assembly/public-assembly-docs/blob/main/static/imgs/exploring-git-assets/Exploring%20git%20on%20github/08.png)

Now you have two branches, `main` and `readme-edits`. Right now, they look exactly the same. Next, you'll add changes to the new branch.

### **Making and committing changes**

When you created a new branch in the previous step, GitHub brought you to the code page for your new `readme-edits` branch, which is a copy of `main`.

You can make and save changes to the files in your repository. On GitHub, saved changes are called commits. Each commit has an associated commit message, which is a description explaining why a particular change was made. Commit messages capture the history of your changes so that other contributors can understand what you’ve done and why.

1. Under the `readme-edits` branch you created, click the *README.md* file.

![readmebranch](https://github.com/public-assembly/public-assembly-docs/blob/main/static/imgs/exploring-git-assets/Exploring%20git%20on%20github/09.png)

2. Click the pencil to edit the file.

![img](https://github.com/public-assembly/public-assembly-docs/blob/main/static/imgs/exploring-git-assets/Exploring%20git%20on%20github/10.png)

3. In the editor, write anything, maybe a bit about yourself. Try using different Markdown elements.

4. In the **Commit changes** box, write a commit message that describes your changes.

**_When you do not write a message it automatically sets to Update README.md_**

5. Click **Commit changes**.

   ![img](https://github.com/public-assembly/public-assembly-docs/blob/main/static/imgs/exploring-git-assets/Exploring%20git%20on%20github/12.png)

These changes will be made only to the README file on your `readme-edits` branch, so now this branch contains content that's different from `main`.

## **Creating your first pull request**

After your changes have been saved, commited, click "hello-world" next to your name to go to the repository origin.

![img](https://github.com/public-assembly/public-assembly-docs/blob/main/static/imgs/exploring-git-assets/Exploring%20git%20on%20github/13.png)

Here, you will see a message that says there have been recent pushes on the readme-edits branch and will ask you to compare and pull request.

![img](https://github.com/public-assembly/public-assembly-docs/blob/main/static/imgs/exploring-git-assets/Exploring%20git%20on%20github/14.png)

When you click "create pull request," the process of merging the last changes you made on the readme-edits branch with the main branch begins. When working in a team, you can keep improving the branch as long as possible because merging to main changes how the whole application is deployed.

![img](https://github.com/public-assembly/public-assembly-docs/blob/main/static/imgs/exploring-git-assets/Exploring%20git%20on%20github/15.png)

Once you've made your first pull request, you can find all pending requests in the pull request tab on the front page of the repository.

![img](https://github.com/public-assembly/public-assembly-docs/blob/main/static/imgs/exploring-git-assets/Exploring%20git%20on%20github/16.png)

Select the Update README.md. 'Edit pull request'

A merge pull request event can be found under conversations. After merging,  the contents of the readme-edit branch are transferred to the main branch.

![img](https://github.com/public-assembly/public-assembly-docs/blob/main/static/imgs/exploring-git-assets/Exploring%20git%20on%20github/Screen%20Shot%202022-10-02%20at%209.09.36%20AM.png)

Navigate to the `Files changed` tab

Red mean deletions of lines of code. 
Green mean code has been modified or added.

![img](https://github.com/public-assembly/public-assembly-docs/blob/main/static/imgs/exploring-git-assets/Exploring%20git%20on%20github/17.png)

Click merge pull request under the conversations tab, then confirm because this action cannot be reversed.

![img](https://github.com/public-assembly/public-assembly-docs/blob/main/static/imgs/exploring-git-assets/Exploring%20git%20on%20github/Screen%20Shot%202022-10-02%20at%209.11.04%20AM.png)

![img](https://github.com/public-assembly/public-assembly-docs/blob/main/static/imgs/exploring-git-assets/Exploring%20git%20on%20github/Screen%20Shot%202022-10-02%20at%209.13.46%20AM.png)

You can delete any unused or fully merged branches, but keeping them as a reference for future work is common.

![img](https://github.com/public-assembly/public-assembly-docs/blob/main/static/imgs/exploring-git-assets/Exploring%20git%20on%20github/19.png)

---

## **Further Resources**

[Git command cheat-sheet ](https://education.github.com/git-cheat-sheet-education.pdf)

---
