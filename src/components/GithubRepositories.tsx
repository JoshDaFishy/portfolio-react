import React from "react"
import axios from "axios"
import GithubIcon from "../assets/Githubpage/GithubMain.svg"
import JumpPage from "../assets/Githubpage/NextPage.svg"
import "../styles/GithubRepositories.scss"

interface IRepo {
    name: string
    html_url: string
}

interface IState {
    repositories: IRepo[]
    pageNumber: number
    pageCount: number
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
        
        for (let x = start; x < end; x++) {
            let repo = this.state.repositories[x]
            result.push(
                <div key={x} className="GitHubRepo">
                    <a className="GithubSource" href={repo.html_url} ><img className="GithubSource" src={GithubIcon} alt="GithubIcon" /></a>
                    <div className="repoText">
                        <p>{repo.name}</p>
                        <p className="githubrepoURL" >{repo.html_url}</p>
                    </div>
                </div>
            )
        }
        return result
    }

    decPage = () => {
        this.setState({pageNumber: this.state.pageNumber - 1})
    }

    incPage = () => {
        this.setState({pageNumber: this.state.pageNumber + 1})
    }

    firstPage = () => {
        this.setState({pageNumber: 0})
    }

    lastPage = () => {
        this.setState({pageNumber: this.state.pageCount - 1})
    }

    render = () => {
        return (
            <>
                <div className="backgroundSquare">
                    {this.renderRepos()}
                </div>
                <div className="pageSelectorBackground">
                        
                        <img className="FirstPageButton" onClick={this.firstPage} src={JumpPage} alt="Jump to first page" />
                    {this.state.pageNumber > 0 &&
                        <button
                            onClick={this.decPage}
                            className="decrementPageButton"
                        >
                            {this.state.pageNumber}
                        </button>
                    }
                    
                    <div className="currentPage" >{this.state.pageNumber + 1}</div>
                    
                    {this.state.pageNumber < this.state.pageCount - 1 &&
                        <button
                            onClick={this.incPage}
                            className="incrementPageButton"
                        >
                            {this.state.pageNumber + 2}
                        </button>
                    }
                    
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