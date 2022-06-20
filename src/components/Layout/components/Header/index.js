import styles from './Header.module.scss'
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function Header() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <h1>Tiktok</h1>
                </div>
                <div className={cx('search')}>
                    <input placeholder='Search accounts and videos'/>
                </div>
                <div className={cx('upload')}>
                    <button>Upload</button>
                </div>
            </div>
        </header>
    )
}

export default Header;