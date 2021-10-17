import React from "react"
import axios from "axios"
import { CSSTransition } from "react-transition-group"
import GithubIcon from "../assets/Githubpage/GithubMain.svg"
import JumpPage from "../assets/Githubpage/NextPage.svg"
import ExpandArrows from "../assets/Githubpage/ExpandArrows.svg"
import "../styles/GithubRepositories.scss"

interface IRepo {
    name: string
    html_url: string
}

interface IState {
    repositories: IRepo[]
    pageNumber: number
    pageCount: number
    maximisedRepo?: IRepo
}

class GithubRepositories extends React.Component<{}, IState> {
    state: IState = {
        repositories: [],
        pageNumber: 0,
        pageCount: 0,
    }

    componentDidMount = () => {
        axios.get("https://api.github.com/users/Conqu3red/repos?sort=updated&per_page=100").then((response: { data: IRepo[] }) => {
            this.setState({
                repositories: response.data,
                pageNumber: 0,
                pageCount: Math.ceil(response.data.length / 7)
            })
        })
    }

    renderRepos = () => {
        let result = []
        
        let start = this.state.pageNumber * 7
        let end = start + 7
        
        if (end > this.state.repositories.length) {
            end = this.state.repositories.length
        }

        let RepoName = "BeforeGitHubRepo"
        
        for (let x = start; x < end; x++) {
            let repo = this.state.repositories[x]
            
            if (repo == this.state.maximisedRepo) {
                result.push(<div key={x} className="ExpandedRepo">
                    {this.renderMaximisedRepo()}
                </div>)
                RepoName = "AfterGitHubRepo"
            }
            else {
                result.push(
                    <CSSTransition
                        in={this.state.maximisedRepo == undefined}
                        timeout={3000}
                        unmountOnExit
                        className={RepoName}
                        classNames={RepoName}
                        onEnter={this.startAnim}
                        onExit={this.exitAnim}
                        key={x}
                    >
                        <div> 
                            <a className="GithubSource" href={repo.html_url} ><img className="GithubSource" src={GithubIcon} alt="GithubIcon" /></a>
                            <div className="repoText">
                                <p>{repo.name}</p>
                                <p className="githubrepoURL" >{repo.html_url}</p>
                            </div>
                            <img className="expandArrows" onClick={() => this.repoDropdown(repo)} src={ExpandArrows} alt="expand"/>
                        </div>
                    </CSSTransition>
                )
            }
        }
        return result
    }

    startAnim = () => {
        
    }

    exitAnim = () => {

    }

    repoDropdown = (repo: IRepo) => {
        this.setState({ maximisedRepo: repo })
    }

    decPage = () => {
        this.setState({pageNumber: this.state.pageNumber - 1})
        this.setState({ maximisedRepo: undefined })
    }

    incPage = () => {
        this.setState({pageNumber: this.state.pageNumber + 1})
        this.setState({ maximisedRepo: undefined })
    }

    firstPage = () => {
        this.setState({pageNumber: 0})
        this.setState({ maximisedRepo: undefined })
    }

    lastPage = () => {
        this.setState({pageNumber: this.state.pageCount - 1})
        this.setState({ maximisedRepo: undefined })
    }

    renderMaximisedRepo = () => {
        if (!this.state.maximisedRepo) return
        let repo = this.state.maximisedRepo
        return (
            <>
                <div className="GitHubRepo">
                        <a className="GithubSource" href={repo.html_url} ><img className="GithubSource" src={GithubIcon} alt="GithubIcon" /></a>
                        <div className="repoText">
                            <p>{repo.name}</p>
                            <p className="githubrepoURL" >{repo.html_url}</p>
                        </div>
                </div>
                <div className="flyout">
                    a
                </div>
            </>
        )
    }

    render = () => {
        return (
            <>
                <div className="backgroundSquare">
                    {/* {this.state.maximisedRepo ? this.renderMaximisedRepo() : this.renderRepos()} */}
                    {this.renderRepos()}
                </div>
                <div className="pageSelectorBackground">
                    <img className="FirstPageButton" onClick={this.firstPage} src={JumpPage} alt="Jump to first page" />
                    <div className="firstpage-decrementpage"></div>
                    {this.state.pageNumber > 0 &&
                        <button
                            onClick={this.decPage}
                            className="decrementPageButton"
                        >
                            {this.state.pageNumber}
                        </button>
                    }
                    
                    <div className="decrementpage-currentpage"></div>

                    <div className="currentPage" >{this.state.pageNumber + 1}</div>
                    
                    <div className="currentpage-incrementpage"></div>

                    {this.state.pageNumber < this.state.pageCount - 1 &&
                        <button
                            onClick={this.incPage}
                            className="incrementPageButton"
                        >
                            {this.state.pageNumber + 2}
                        </button>
                    }
                    
                    <div className="incrementpage-lastpage"></div>

                    <img className="LastPage" onClick={this.lastPage} src={JumpPage} alt="Jump to last page" />
                </div>
                <div className="BacktoHome">
                    <a href="/">
                        <p>
                            Back to Homepage
                        </p>
                    </a>
                </div>
                
            </>
        )
    }
}

export default GithubRepositories 