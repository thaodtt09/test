import React, { Component } from 'react';

class NewsDetail extends Component {
    render() {
        return (
            <div>
                <header className="masthead tintuc">
                    <div className="container h-100">
                    <div className="row h-100">
                        <div className="col-lg-12 my-auto">
                        <div className="header-content mx-auto">
                            <h1 className="mb-5 text-center">Trang tin tức chi tiết</h1>
                        </div>
                        </div>
                    </div>
                    </div>
                </header>
                <div className="jumbotron jumbotron-fluid">
                    <div className="container">
                        <img src="https://placehold.it/1000x300.png" alt="card_head" className="img-fluid" />
                        <p className="lead">Jumbo helper text</p>
                        <hr className="my-2" />
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam dolor quam quasi aliquid, et omnis mollitia tempore quisquam, magnam nemo qui asperiores suscipit. Alias vel deleniti, vitae perspiciatis eius reiciendis.</p>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam dolor quam quasi aliquid, et omnis mollitia tempore quisquam, magnam nemo qui asperiores suscipit. Alias vel deleniti, vitae perspiciatis eius reiciendis.</p>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam dolor quam quasi aliquid, et omnis mollitia tempore quisquam, magnam nemo qui asperiores suscipit. Alias vel deleniti, vitae perspiciatis eius reiciendis.</p>
                        <p className="lead">
                        <a className="btn btn-primary" href="Jumbo action link" role="button">Jumbo action name</a>
                        </p>
                    </div>
                </div>
                <div className="container">
                    <h4 className="card-title text-center">Tin lien quan</h4>
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="card-deck">
                                <div className="card">
                                    <a href="chitiet.html"><img className="card-img-top img-fluid" src="https://placehold.jp/300x200.png" alt="" /></a>
                                    <div className="card-body">
                                        <h4 className="card-title">Title</h4>
                                        <p className="card-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda est ad placeat ipsa repudiandae voluptatum totam ab ducimus harum. Dolores, quod labore? Corrupti nobis, fugiat magnam sit asperiores incidunt architecto.</p>
                                    </div>
                                </div>
                                <div className="card">
                                    <a href="chitiet.html"><img className="card-img-top img-fluid" src="https://placehold.jp/300x200.png" alt="" /></a>
                                    <div className="card-body">
                                        <h4 className="card-title">Title</h4>
                                        <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet veritatis voluptatum ea veniam consequuntur est officiis amet numquam a at architecto nam blanditiis impedit alias corporis debitis cumque, similique vitae!</p>
                                    </div>
                                </div>
                                <div className="card">
                                    <a href="chitiet.html"><img className="card-img-top img-fluid" src="https://placehold.jp/300x200.png" alt="" /></a>
                                    <div className="card-body">
                                        <h4 className="card-title">Title</h4>
                                        <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga dolorum quis iste maiores, nihil repellat similique tempora esse suscipit delectus doloremque corporis eligendi, ipsam neque molestias rem ratione impedit facere!</p>
                                    </div>
                                </div>
                                <div className="card">
                                    <a href="chitiet.html"><img className="card-img-top img-fluid" src="https://placehold.jp/300x200.png" alt="" /></a>
                                    <div className="card-body">
                                        <h4 className="card-title">Title</h4>
                                        <p className="card-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum, qui. Ullam impedit labore, placeat nesciunt, quasi ipsa voluptatum veniam aperiam consectetur recusandae tempore possimus saepe laudantium perferendis omnis quis itaque.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default NewsDetail;