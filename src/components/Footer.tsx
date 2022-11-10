import React from "react";
import { Link } from "react-router-dom";
import "../styles/Footer.scss"

interface FooterProps {
    
}
 
interface FooterState {
    url: string[];
}
 
class Footer extends React.Component<FooterProps, FooterState> {
    constructor(props: FooterProps) {
        super(props);
        this.state = { url: [
            '会員登録',
            '運営会社',
            '利用規約',
            '個人情報の取扱について',
            '特定商取引法に基づく表記',
            'お問い合わせ'
        ]};
    }
    render() { 
        return ( 
            <div className="main-footer">
                <div className="footer-container align-center h-100">
                    {this.state.url.map((item:string, index: number)=>
                        <div key={index}>
                            <Link to={"/"}>{item}</Link>
                        </div>
                    )}
                </div>
            </div>
         );
    }
}
 
export default Footer;