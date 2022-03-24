/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { TailSpin } from 'react-loader-spinner';

interface WrappedComponentProps {
  setLoading: (value: boolean) => void;
}

const loader = (
  WrappedComponent: React.ComponentType<WrappedComponentProps>,
) => {
  class HOC extends React.Component<
    Record<string, never>,
    { loading: boolean }
  > {
    constructor(props) {
      super(props);
      this.state = {
        loading: true,
      };
    }

    setLoading = (value: boolean) => {
      this.setState({ loading: value });
    };

    render() {
      return (
        <>
          {this.state.loading && (
            <div
              className="loader"
              style={{
                width: '760px',
                display: 'flex',
                justifyContent: 'center',
                marginTop: '30px',
              }}
            >
              <TailSpin color="#B22222" height={80} width={80} />
            </div>
          )}
          <div style={{ display: this.state.loading ? 'none' : 'block' }}>
            <WrappedComponent setLoading={this.setLoading} />
          </div>
        </>
      );
    }
  }
  return HOC;
};

export default loader;
