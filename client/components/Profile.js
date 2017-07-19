import React from 'react'

class Profile extends React.Component {
  render() {
    if (!this.props.profile) return null;

    return <div className="card small horizontal profile">
        <div className="card-image">
            <img src={this.props.profile.img}/>
        </div>
        <div className="card-stacked">
            <div className="card-content valign-wrapper">
                <dl>
                    <dt>Current Rank:</dt>
                    <dd>
                        <img src={this.props.profile.currentRank.img} alt={this.props.profile.currentRank.name}/>
                    </dd>
                    <dt>Member Since:</dt>
                    <dd>{this.props.profile.created}</dd>
                    <dt>Total Sparring Sessions:</dt>
                    <dd>{this.props.profile.fightData.sparringSessions}</dd>
                    <dt>Fight Record:</dt>
                    <dd>{`${this.props.profile.fightData.fightsWon}-${this.props.profile.fightData.fightsLost}`}</dd>                                                            
                </dl>
            </div>
        </div>
    </div>
  }
}

export default Profile;