import React, { ReactNode } from "react";

interface ChangingProgressProviderProps {
  values: number[];
  interval?: number;
  children: (currentValue: number) => ReactNode;
}

interface ChangingProgressProviderState {
  valuesIndex: number;
}

class ChangingProgressProvider extends React.Component<
  ChangingProgressProviderProps,
  ChangingProgressProviderState
> {
  static defaultProps = {
    interval: 1000,
  };

  state: ChangingProgressProviderState = {
    valuesIndex: 0,
  };

  private timerId?: number;

  componentDidMount() {
    this.timerId = window.setInterval(() => {
      this.setState((prevState) => ({
        valuesIndex: (prevState.valuesIndex + 1) % this.props.values.length,
      }));
    }, this.props.interval);
  }

  componentWillUnmount() {
    if (this.timerId) {
      clearInterval(this.timerId);
    }
  }

  render() {
    const { values, children } = this.props;
    const { valuesIndex } = this.state;

    return <>{children(values[valuesIndex])}</>;
  }
}

export default ChangingProgressProvider;
